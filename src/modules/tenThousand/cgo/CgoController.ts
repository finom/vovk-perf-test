import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgo")
export default class CgoController {
  @operation({
    summary: "Get Cgo",
  })
  @get()
  static getCgo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cgo",
  })
  @post("{id}")
  static createCgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
