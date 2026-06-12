import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eni")
export default class EniController {
  @operation({
    summary: "Get Eni",
  })
  @get()
  static getEni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eni",
  })
  @post("{id}")
  static createEni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
