import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnd")
export default class BndController {
  @operation({
    summary: "Get Bnd",
  })
  @get()
  static getBnd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnd",
  })
  @post("{id}")
  static createBnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
