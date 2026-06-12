import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kar")
export default class KarController {
  @operation({
    summary: "Get Kar",
  })
  @get()
  static getKar = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kar",
  })
  @post("{id}")
  static createKar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
