import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btn")
export default class BtnController {
  @operation({
    summary: "Get Btn",
  })
  @get()
  static getBtn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Btn",
  })
  @post("{id}")
  static createBtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
