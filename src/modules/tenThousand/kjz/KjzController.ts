import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjz")
export default class KjzController {
  @operation({
    summary: "Get Kjz",
  })
  @get()
  static getKjz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjz",
  })
  @post("{id}")
  static createKjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
