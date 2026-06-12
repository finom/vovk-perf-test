import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("get")
export default class GetController {
  @operation({
    summary: "Get Get",
  })
  @get()
  static getGet = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Get",
  })
  @post("{id}")
  static createGet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
