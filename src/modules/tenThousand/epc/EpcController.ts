import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epc")
export default class EpcController {
  @operation({
    summary: "Get Epc",
  })
  @get()
  static getEpc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epc",
  })
  @post("{id}")
  static createEpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
