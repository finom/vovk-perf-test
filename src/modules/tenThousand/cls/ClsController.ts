import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cls")
export default class ClsController {
  @operation({
    summary: "Get Cls",
  })
  @get()
  static getCls = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cls",
  })
  @post("{id}")
  static createCls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
