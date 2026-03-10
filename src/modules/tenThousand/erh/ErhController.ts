import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erh")
export default class ErhController {
  @operation({
    summary: "Get Erh",
  })
  @get()
  static getErh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erh",
  })
  @post("{id}")
  static createErh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
