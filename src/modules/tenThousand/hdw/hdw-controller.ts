import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdw")
export default class HdwController {
  @operation({
    summary: "Get Hdw",
  })
  @get()
  static getHdw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdw",
  })
  @post("{id}")
  static createHdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
