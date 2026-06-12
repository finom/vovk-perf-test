import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kds")
export default class KdsController {
  @operation({
    summary: "Get Kds",
  })
  @get()
  static getKds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kds",
  })
  @post("{id}")
  static createKds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
