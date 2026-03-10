import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("faa")
export default class FaaController {
  @operation({
    summary: "Get Faa",
  })
  @get()
  static getFaa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Faa",
  })
  @post("{id}")
  static createFaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
