import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuc")
export default class IucController {
  @operation({
    summary: "Get Iuc",
  })
  @get()
  static getIuc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuc",
  })
  @post("{id}")
  static createIuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
