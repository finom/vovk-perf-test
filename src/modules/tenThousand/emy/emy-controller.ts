import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emy")
export default class EmyController {
  @operation({
    summary: "Get Emy",
  })
  @get()
  static getEmy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emy",
  })
  @post("{id}")
  static createEmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
