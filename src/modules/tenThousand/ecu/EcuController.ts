import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecu")
export default class EcuController {
  @operation({
    summary: "Get Ecu",
  })
  @get()
  static getEcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecu",
  })
  @post("{id}")
  static createEcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
