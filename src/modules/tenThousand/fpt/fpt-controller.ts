import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpt")
export default class FptController {
  @operation({
    summary: "Get Fpt",
  })
  @get()
  static getFpt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpt",
  })
  @post("{id}")
  static createFpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
