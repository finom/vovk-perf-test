import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avj")
export default class AvjController {
  @operation({
    summary: "Get Avj",
  })
  @get()
  static getAvj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avj",
  })
  @post("{id}")
  static createAvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
