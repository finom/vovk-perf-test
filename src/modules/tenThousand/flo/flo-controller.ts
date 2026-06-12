import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flo")
export default class FloController {
  @operation({
    summary: "Get Flo",
  })
  @get()
  static getFlo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Flo",
  })
  @post("{id}")
  static createFlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
