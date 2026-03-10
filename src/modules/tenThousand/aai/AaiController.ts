import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aai")
export default class AaiController {
  @operation({
    summary: "Get Aai",
  })
  @get()
  static getAai = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aai",
  })
  @post("{id}")
  static createAai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
