import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ec")
export default class EcController {
  @operation({
    summary: "Get Ec",
  })
  @get()
  static getEc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ec",
  })
  @post("{id}")
  static createEc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
