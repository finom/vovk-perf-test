import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("all")
export default class AllController {
  @operation({
    summary: "Get All",
  })
  @get()
  static getAll = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create All",
  })
  @post("{id}")
  static createAll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
