import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ty")
export default class TyController {
  @operation({
    summary: "Get Ty",
  })
  @get()
  static getTy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ty",
  })
  @post("{id}")
  static createTy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
