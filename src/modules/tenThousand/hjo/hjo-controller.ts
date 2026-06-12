import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjo")
export default class HjoController {
  @operation({
    summary: "Get Hjo",
  })
  @get()
  static getHjo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hjo",
  })
  @post("{id}")
  static createHjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
