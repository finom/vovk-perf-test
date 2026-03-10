import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddv")
export default class DdvController {
  @operation({
    summary: "Get Ddv",
  })
  @get()
  static getDdv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ddv",
  })
  @post("{id}")
  static createDdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
