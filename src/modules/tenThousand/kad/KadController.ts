import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kad")
export default class KadController {
  @operation({
    summary: "Get Kad",
  })
  @get()
  static getKad = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kad",
  })
  @post("{id}")
  static createKad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
