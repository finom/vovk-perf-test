import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzq")
export default class KzqController {
  @operation({
    summary: "Get Kzq",
  })
  @get()
  static getKzq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzq",
  })
  @post("{id}")
  static createKzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
