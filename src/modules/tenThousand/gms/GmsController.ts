import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gms")
export default class GmsController {
  @operation({
    summary: "Get Gms",
  })
  @get()
  static getGms = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gms",
  })
  @post("{id}")
  static createGms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
