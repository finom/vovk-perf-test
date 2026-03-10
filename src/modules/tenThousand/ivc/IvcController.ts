import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivc")
export default class IvcController {
  @operation({
    summary: "Get Ivc",
  })
  @get()
  static getIvc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivc",
  })
  @post("{id}")
  static createIvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
