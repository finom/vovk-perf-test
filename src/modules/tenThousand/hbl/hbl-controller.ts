import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbl")
export default class HblController {
  @operation({
    summary: "Get Hbl",
  })
  @get()
  static getHbl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbl",
  })
  @post("{id}")
  static createHbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
