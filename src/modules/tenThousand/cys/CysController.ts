import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cys")
export default class CysController {
  @operation({
    summary: "Get Cys",
  })
  @get()
  static getCys = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cys",
  })
  @post("{id}")
  static createCys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
