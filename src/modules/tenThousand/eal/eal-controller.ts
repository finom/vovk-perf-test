import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eal")
export default class EalController {
  @operation({
    summary: "Get Eal",
  })
  @get()
  static getEal = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eal",
  })
  @post("{id}")
  static createEal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
