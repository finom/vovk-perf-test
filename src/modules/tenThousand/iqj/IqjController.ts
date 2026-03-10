import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqj")
export default class IqjController {
  @operation({
    summary: "Get Iqj",
  })
  @get()
  static getIqj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqj",
  })
  @post("{id}")
  static createIqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
