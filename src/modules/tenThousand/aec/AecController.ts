import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aec")
export default class AecController {
  @operation({
    summary: "Get Aec",
  })
  @get()
  static getAec = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aec",
  })
  @post("{id}")
  static createAec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
