import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acc")
export default class AccController {
  @operation({
    summary: "Get Acc",
  })
  @get()
  static getAcc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acc",
  })
  @post("{id}")
  static createAcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
