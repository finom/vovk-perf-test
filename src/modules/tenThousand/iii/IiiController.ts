import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iii")
export default class IiiController {
  @operation({
    summary: "Get Iii",
  })
  @get()
  static getIii = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iii",
  })
  @post("{id}")
  static createIii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
