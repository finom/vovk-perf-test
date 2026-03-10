import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eco")
export default class EcoController {
  @operation({
    summary: "Get Eco",
  })
  @get()
  static getEco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eco",
  })
  @post("{id}")
  static createEco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
