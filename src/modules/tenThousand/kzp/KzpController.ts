import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzp")
export default class KzpController {
  @operation({
    summary: "Get Kzp",
  })
  @get()
  static getKzp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzp",
  })
  @post("{id}")
  static createKzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
