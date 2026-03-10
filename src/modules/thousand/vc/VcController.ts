import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vc")
export default class VcController {
  @operation({
    summary: "Get Vc",
  })
  @get()
  static getVc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vc",
  })
  @post("{id}")
  static createVc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
