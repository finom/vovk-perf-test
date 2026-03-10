import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifg")
export default class IfgController {
  @operation({
    summary: "Get Ifg",
  })
  @get()
  static getIfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ifg",
  })
  @post("{id}")
  static createIfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
