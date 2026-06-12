import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inw")
export default class InwController {
  @operation({
    summary: "Get Inw",
  })
  @get()
  static getInw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Inw",
  })
  @post("{id}")
  static createInw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
