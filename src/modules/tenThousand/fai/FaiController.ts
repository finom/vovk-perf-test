import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fai")
export default class FaiController {
  @operation({
    summary: "Get Fai",
  })
  @get()
  static getFai = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fai",
  })
  @post("{id}")
  static createFai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
