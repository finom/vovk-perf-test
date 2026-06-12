import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("biq")
export default class BiqController {
  @operation({
    summary: "Get Biq",
  })
  @get()
  static getBiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Biq",
  })
  @post("{id}")
  static createBiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
