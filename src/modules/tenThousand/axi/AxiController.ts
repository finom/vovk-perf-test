import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axi")
export default class AxiController {
  @operation({
    summary: "Get Axi",
  })
  @get()
  static getAxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Axi",
  })
  @post("{id}")
  static createAxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
