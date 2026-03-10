import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnb")
export default class HnbController {
  @operation({
    summary: "Get Hnb",
  })
  @get()
  static getHnb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnb",
  })
  @post("{id}")
  static createHnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
