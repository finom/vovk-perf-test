import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuq")
export default class FuqController {
  @operation({
    summary: "Get Fuq",
  })
  @get()
  static getFuq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fuq",
  })
  @post("{id}")
  static createFuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
