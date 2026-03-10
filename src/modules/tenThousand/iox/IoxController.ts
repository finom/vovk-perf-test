import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iox")
export default class IoxController {
  @operation({
    summary: "Get Iox",
  })
  @get()
  static getIox = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iox",
  })
  @post("{id}")
  static createIox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
