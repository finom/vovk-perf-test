import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecj")
export default class EcjController {
  @operation({
    summary: "Get Ecj",
  })
  @get()
  static getEcj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecj",
  })
  @post("{id}")
  static createEcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
