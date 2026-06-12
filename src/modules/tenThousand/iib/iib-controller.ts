import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iib")
export default class IibController {
  @operation({
    summary: "Get Iib",
  })
  @get()
  static getIib = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iib",
  })
  @post("{id}")
  static createIib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
