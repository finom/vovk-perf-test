import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivu")
export default class IvuController {
  @operation({
    summary: "Get Ivu",
  })
  @get()
  static getIvu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivu",
  })
  @post("{id}")
  static createIvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
