import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aeo")
export default class AeoController {
  @operation({
    summary: "Get Aeo",
  })
  @get()
  static getAeo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aeo",
  })
  @post("{id}")
  static createAeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
