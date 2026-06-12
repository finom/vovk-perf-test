import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iux")
export default class IuxController {
  @operation({
    summary: "Get Iux",
  })
  @get()
  static getIux = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iux",
  })
  @post("{id}")
  static createIux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
