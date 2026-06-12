import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyr")
export default class FyrController {
  @operation({
    summary: "Get Fyr",
  })
  @get()
  static getFyr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyr",
  })
  @post("{id}")
  static createFyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
