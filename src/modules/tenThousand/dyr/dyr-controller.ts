import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyr")
export default class DyrController {
  @operation({
    summary: "Get Dyr",
  })
  @get()
  static getDyr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyr",
  })
  @post("{id}")
  static createDyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
