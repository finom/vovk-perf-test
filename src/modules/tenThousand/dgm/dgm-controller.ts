import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgm")
export default class DgmController {
  @operation({
    summary: "Get Dgm",
  })
  @get()
  static getDgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgm",
  })
  @post("{id}")
  static createDgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
